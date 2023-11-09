import os
import ffmpeg
from glob import glob

# Path to the directory containing PNG images
image_dir = r"C:/Users/Acer/Documents/images"  # Use a raw string (r) or double backslashes
output_video = "output.mp4"

# Create a list of PNG files in the directory
image_files = sorted(glob(os.path.join(image_dir, "*.png")))

# Set the desired frame rate
frame_rate = 60

# Define the FFmpeg output options, including compression settings
output_options = {
    "c:v": "libx264",  # Video codec
    "crf": 18,         # Constant Rate Factor for compression (adjust as needed)
    "pix_fmt": "yuv420p",  # Pixel format for compatibility
    "loglevel": "quiet",  # Set log level to quiet
}

ffmpeg_path = r'C:\Program Files\ffmpeg-master-latest-win64-gpl'  # Replace with the actual path to ffmpeg.exe

# Create the FFmpeg input and output objects
input_stream = ffmpeg.input("pipe:0", format="image2", framerate=frame_rate)
output_stream = ffmpeg.output(input_stream, output_video, **output_options)

# Run FFmpeg to create the video
ffmpeg.run(output_stream, input=" ".join(image_files), cmd=ffmpeg_path)

print("Video created and compressed:", output_video)