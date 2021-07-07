import time
import os

os.system("clear")

print("\033[1;32;40m change your  SOCKES to 127.0.0.1:9050 \n")

while True:
  time.sleep(2)
  os.system("brew services restart tor")
  os.system("taiko index.js")
  print("<<<<<<<<<<<<<<<<Your IP has been Changed>>>>>>>>>>>>>>>>>")


