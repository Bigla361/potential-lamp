function fun() {
  searchparams = new URLSearchParams(window.location.search)
  
  if (searchparams.has("code")) {
    text = document.createElement("p");
    text.innerText = "Auth Code: " + searchparams.get("code");
    document.getElementsByTagName("body")[0].append(text);
  }
}
