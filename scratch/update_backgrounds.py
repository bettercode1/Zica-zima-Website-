import re

file_path = r'd:\ZicaZima\next-app\lib\courses.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace all occurrences of /image/Backgrounds/ with /image/Courses/
new_content = content.replace('/image/Backgrounds/', '/image/Courses/')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully updated backgrounds to courses.")
