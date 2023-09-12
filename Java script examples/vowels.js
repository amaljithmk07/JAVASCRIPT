function vowel_Count(str)
{ 

  return str.replace(/[^aeiou]/g, "").length; 
}

document.write(vowel_Count("Python"));
document.write(vowel_Count("amaljith"));
