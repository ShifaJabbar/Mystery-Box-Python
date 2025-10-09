import webbrowser
import os

# Get the absolute path of the HTML file
file_path = os.path.abspath("index.html")

# Open it in the default web browser
webbrowser.open(f"file://{file_path}")
