const skip_add = (clss) => 
 {
  const buttons = document.getElementsByClassName(clss);
  for (const button of buttons) 
    {
     button.click();
     console.log("Engellendi");
    }
 }

 setInterval(() => 
 {
  skip_add("ytp-ad-skip-button-text");
  skip_add("ytp-ad-overlay-close-button");
 }, 1000);