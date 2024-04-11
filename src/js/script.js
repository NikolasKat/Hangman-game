window.addEventListener("DOMContentLoaded", () => {
   const gallowBlock = document.querySelector(".gallows"),
      wrongLetters = document.querySelector(".wrong-letters"),
      wordField = document.querySelector(".word-field");

   const arrayOfWords = [
      "mosquito",
      "Weather",
      "DinosaUr",
      "computer",
      "teacher",
      "SuN",
      "MammOth",
      "abstract",
      "mathematics",
      "shop",
      "mother",
      "text",
      "array",
      "loop",
      "elephant",
      "chameleon",
      "bed",
      "camera",
   ];

   let word =
      arrayOfWords[
         Math.floor(Math.random() * arrayOfWords.length)
      ].toLowerCase();
   console.log(word);

   const arrayOfLetters = [],
      newWordArr = word.split("");
   let counter = 0;

   // function word field for random word
   function createWordField(data) {
      for (let i = 0; i < data.length; i++) {
         const span = document.createElement("span");
         span.classList.add("letter");
         span.id = i;
         wordField.append(span);
      }
   }

   createWordField(newWordArr);

   // big function for showing letters and alerts
   function showLetter(arr, keyboardLetter) {
      arr.forEach((element, index) => {
         if (keyboardLetter == element) {
            const span = document.getElementById(index);
            span.style.borderBottom = "#00ff7e";
            span.id = `filled-${index}`;
            span.textContent = element;

            const spanB = document.querySelectorAll("span");
            const arrayForNoEmptySpans = [];
            spanB.forEach((item) => {
               if (
                  item.id == "filled-0" ||
                  item.id == "filled-1" ||
                  item.id == "filled-2" ||
                  item.id == "filled-3" ||
                  item.id == "filled-4" ||
                  item.id == "filled-5" ||
                  item.id == "filled-6" ||
                  item.id == "filled-7" ||
                  item.id == "filled-8"
               ) {
                  arrayForNoEmptySpans.push(item);
               }

               if (arrayForNoEmptySpans.length == newWordArr.length) {
                  setTimeout(() => {
                     alert("You Win!");
                     window.location.reload();
                  }, 1000);
               } else {
                  console.log("Err");
               }
            });
         }
      });
   }

   // function for creating parts of body
   function createPartOfBody(c) {
      const div = document.createElement("div");
      if (c == 1) {
         div.id = "five";
      }
      if (c == 2) {
         div.id = "six";
      }
      if (c == 3) {
         div.id = "seven";
      }
      if (c == 4) {
         div.id = "eight";
      }
      if (c == 5) {
         div.id = "nine";
      }
      if (c > 5) {
         alert("You loose");
         window.location.reload();
      }
      gallowBlock.append(div);
   }

   // function for adding wrong letters in wrong block
   function addLetterInWrongList(arr) {
      wrongLetters.textContent = `Wrong: ${arr}`;
   }

   // addEventListener for keyboard
   document.addEventListener("keydown", (e) => {
      const logicResult = newWordArr.some((item) => item == e.key);
      if (logicResult) {
         console.log("Est takaya bukva!");
         showLetter(newWordArr, e.key);
      } else {
         counter += 1;
         arrayOfLetters.push(e.key);
         addLetterInWrongList(arrayOfLetters);
         createPartOfBody(counter);
      }
   });
});
