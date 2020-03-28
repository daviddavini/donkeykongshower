

def new_name(name):
  l = name[0]
  if l == 'z':
    new_l = 'a'
  else:
    new_l = chr(ord(l) + 1)
  
  return new_l + name[1:]

first_name = 'ethan'
last_name = 'lam'

for i in range(26):
  first_name = new_name(first_name)
  last_name = new_name(last_name)
  print("Hey there buddy-o-pal! You're", first_name, last_name, "right?")