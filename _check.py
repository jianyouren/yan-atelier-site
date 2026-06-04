import re, sys
src = open(r"d:\YAN_Atelier_Site\_check.js","r",encoding="utf-8").read()
# Strip block comments
src = re.sub(r"/\*[\s\S]*?\*/","",src)
# Strip line comments (simple)
src = re.sub(r"//[^\n]*","",src)
# Strip template literals (greedy non-backtick)
src = re.sub(r"`[\s\S]*?`","``",src)
# Strip single-quoted strings
src = re.sub(r"\'(?:[^\'\\\\]|\\\\.)*\'","''",src)
# Strip double-quoted strings
src = re.sub(r"\"(?:[^\"\\\\]|\\\\.)*\"","\"\"",src)
# Count
for ch in ["{","}","[","]","(",")"]:
    print(f"{ch}: {src.count(ch)}")
