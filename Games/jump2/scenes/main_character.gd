extends CharacterBody2D

const SPEED = 300.0
const JUMP_VELOCITY = -900.0
@onready var sprite_2d = $Sprite2D

var gravity = ProjectSettings.get_setting("physics/2d/default_gravity")

func _physics_process(delta):
	if velocity.x > 1 or velocity.x < -1:
		sprite_2d.animation = "running"
	else:
		sprite_2d.animation = "idle"
	
	if not is_on_floor():
		velocity.y += gravity * delta
		sprite_2d.animation = "jump"
	
	if Input.is_action_just_pressed("jump") and is_on_floor():
		velocity.y = JUMP_VELOCITY

	var direction = Input.get_axis("left", "right")
	if direction:
		velocity.x = direction * SPEED
	else:
		velocity.x = move_toward(velocity.x, 0, 20)

	move_and_slide()
	sprite_2d.flip_h = velocity.x < 0

#func _ready():
	## Ensure 'self' is used to refer to the current instance of CharacterBody2D
	#var hitbox = get_node("../Bunny/Hitbox")
	#hitbox.player_hit.connect(self.ouch)
#
#func ouch():
	#Global.lose_lives()

