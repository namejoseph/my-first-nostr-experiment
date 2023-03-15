function toTheClipboard() {
    var copyText = "npub1ca0pjqt99dqqsgsqk4gj6r0ly3fzwpcyc43ppu049yl5dxhw8wmqelewwv";
    navigator.clipboard.writeText(copyText).then(
        () => {
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!
  document.getElementById('clipboard-confirmation').innerHTML = "<font color='green'>COPIED!</font>";
    }, () => {
          document.getElementById('clipboard-confirmation').innerHTML = "<font color='red'>FAILED!</font>";
    });
}