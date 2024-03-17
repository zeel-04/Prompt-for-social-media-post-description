function combineWords() {

    // Show the <pre> tag
    document.getElementById('myPreTag').style.display = 'block';

    var text1 = document.getElementById("text1").value;
    var text2 = document.getElementById("text2").value;
    var output = document.getElementById("output");

    output.innerHTML = "Craft a proffesional LinkedIn post focusing on " + text1 + ", tailored for aspiring students and professionals in the field of ML and data science. The goal is to provide valuable insightsfor those seeking a successful path in ML and data science. Optimize the content for search engines without explicitly mentioning 'SEO' to enhance visibility and engagement and write very brief description. Your aim is to guide and inspire the audience, highlighting key strategies and opportunities within the dynamic world of ML and data science. Avoid using bold and italics text formating in heading. Note: Avoid using starter sentences like 'Exciting News for Aspiring ML and Data Science Enthusiasts! ' instead directly start with the content. Keep the content concise and to the point. The length of the content should be " + text2+".";
  }

// Get the <pre> element
const preTag = document.getElementById("myPreTag");

// Create a copy button element
const copyButton = document.createElement("span");
copyButton.innerText = "Copy";
copyButton.classList.add("copy-button");

// Append the copy button to the <pre> tag
preTag.appendChild(copyButton);

// Add click event listener to the copy button
copyButton.addEventListener("click", () => {
  // Hide the copy button temporarily
  copyButton.style.display = "none";

  // Create a range and select the text inside the <pre> tag
  const range = document.createRange();
  range.selectNode(preTag);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  try {
    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Alert the user that the text has been copied
    copyButton.innerText = "Copied!";
    setTimeout(function(){
      copyButton.innerText = "Copy";
    }, 2000);
  } catch (err) {
    console.error("Unable to copy text:", err);
  } finally {
    // Show the copy button again
    copyButton.style.display = "inline";

    // Deselect the text
    window.getSelection().removeAllRanges();
  }
});