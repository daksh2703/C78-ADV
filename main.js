var images = ["37857.jpg", "1b73226a-f4f5-42bd-ad67-13b585eaa919.JPG", "5fcbcff5-8e5d-4317-beeb-1336ab995afd.JPG","IMG-0006.JPG"];
var names = ["Anannya Goyal", "Raman Goyal", "Riya Goyal","Daksh Goyal"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
