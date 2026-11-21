/* Organizer settings and puzzles. See SETUP.txt for solutions. */
window.SECRET_CONFIG = {
  "entryCode": "0731",
  "finalCode": "2468",
  "stripTitle": "end of chapter 2.",
  "stripSubtitle": "five little memories • one favorite day",
  "stages": [
    {
      "id": "numbers",
      "title": "A receipt with a twist.",
      "eyebrow": "Clue one",
      "answer": "take a selfie of us getting drinks",
      "cipher": {
        "kind": "numbers",
        "text": "21-03-14-09 / 02 / 20-07-15-10-14-11 / 16-08 / 22-21 / 08-07-23-24-14-20-14 / 05-20-12-18-16-25"
      },
      "slots": [
        {
          "id": "drinks",
          "label": "Our drinks selfie",
          "caption": "a little cheers"
        }
      ],
      "theme": "I’ve been looking forward to getting drinks with you. Something cold, a little time to ourselves, and your company feel like the perfect start. Our receipt has picked up a little extra with every letter.",
      "key": "A = 1   ·   M = 13\nEach word starts fresh: its first letter was shifted forward 1 place, its second 2, its third 3, and so on. The alphabet wraps after Z. Undo the shifts, then read the letters. Slashes separate words."
    },
    {
      "id": "morse",
      "title": "Signals from our blanket.",
      "eyebrow": "Clue two",
      "answer": "take a selfie of us at the picnic",
      "cipher": {
        "kind": "morse",
        "text": "- .-. -. . / -. / - -- --.- -.-- - --- / --.- ... / --- --. / . -. / - ---- . / .-.- -- .- .-.- -- -..-"
      },
      "slots": [
        {
          "id": "picnic",
          "label": "Our picnic selfie",
          "caption": "under open skies"
        }
      ],
      "theme": "A blanket, a few snacks, and you beside me. That’s the picnic I’ve been looking forward to. A small signal found its way here, but the breeze seems to have turned it around.",
      "referenceImage": "morse-code.png",
      "key": "The signal has two twists. Dots and dashes have swapped places. Within each word, the letter groups run from last to first. Restore both before reading. A space separates letters; / separates words."
    },
    {
      "id": "bold",
      "title": "Between the lines.",
      "eyebrow": "Clue three",
      "answer": "take a picture of our paintings",
      "cipher": {
        "kind": "bold",
        "segments": [
          {
            "text": "Painting",
            "bold": true
          },
          {
            "text": " beside you "
          },
          {
            "text": "and",
            "bold": true
          },
          {
            "text": " "
          },
          {
            "text": "imagining",
            "bold": true
          },
          {
            "text": " "
          },
          {
            "text": "new",
            "bold": true
          },
          {
            "text": " "
          },
          {
            "text": "things",
            "bold": true
          },
          {
            "text": " "
          },
          {
            "text": "is",
            "bold": true
          },
          {
            "text": " "
          },
          {
            "text": "nothing",
            "bold": true
          },
          {
            "text": " "
          },
          {
            "text": "grand",
            "bold": true
          },
          {
            "text": ", but "
          },
          {
            "text": "sometimes",
            "bold": true
          },
          {
            "text": " those quiet moments are the ones I want to remember most. "
          },
          {
            "text": "Our",
            "bold": true
          },
          {
            "text": " time together feels "
          },
          {
            "text": "unhurried",
            "bold": true
          },
          {
            "text": ", warm, and "
          },
          {
            "text": "real",
            "bold": true
          },
          {
            "text": ", even when neither of us has anything planned. "
          },
          {
            "text": "Ordinary",
            "bold": true
          },
          {
            "text": " afternoons have become my "
          },
          {
            "text": "favorite",
            "bold": true
          },
          {
            "text": " memories because I get to spend them with you. "
          },
          {
            "text": "Perhaps",
            "bold": true
          },
          {
            "text": " "
          },
          {
            "text": "it’s",
            "bold": true
          },
          {
            "text": " "
          },
          {
            "text": "chance",
            "bold": true
          },
          {
            "text": " "
          },
          {
            "text": "that",
            "bold": true
          },
          {
            "text": " brought us here, but what has "
          },
          {
            "text": "unfolded",
            "bold": true
          },
          {
            "text": " feels "
          },
          {
            "text": "real",
            "bold": true
          },
          {
            "text": " and "
          },
          {
            "text": "easy",
            "bold": true
          },
          {
            "text": ", and I’m grateful we get to see where it goes. "
          },
          {
            "text": "And",
            "bold": true
          },
          {
            "text": " I still smile when I think about how we found our way back into each other’s lives. "
          },
          {
            "text": "Time",
            "bold": true
          },
          {
            "text": " with you feels like "
          },
          {
            "text": "a",
            "bold": true
          },
          {
            "text": " "
          },
          {
            "text": "kind",
            "bold": true
          },
          {
            "text": " of "
          },
          {
            "text": "escape",
            "bold": true
          },
          {
            "text": ", a little pocket of calm that I wish would last longer."
          }
        ]
      },
      "slots": [
        {
          "id": "painting-one",
          "label": "The first painting",
          "caption": "one set of colors"
        },
        {
          "id": "painting-two",
          "label": "The other painting",
          "caption": "another set of colors"
        }
      ],
      "key": "Read the sentences from last to first. Within each sentence, read the bold words from left to right and keep only their initials. Each sentence gives one word."
    },
    {
      "id": "reverse",
      "title": "The golden hour.",
      "eyebrow": "Clue four",
      "answer": "take a selfie of us and the sunset",
      "cipher": {
        "kind": "columns",
        "text": "D : e l f n · t\nE : · f · d s ×\nG : t · e s t n\nL : k e o a e e\nN : a i u · u ×\nO : a s · · h s"
      },
      "slots": [
        {
          "id": "sunset",
          "label": "Our sunset selfie",
          "caption": "before the light left"
        }
      ],
      "theme": "I’ve wanted to watch the sunset with you. There’s something about the last bit of light that makes everything feel quieter. I’m happy that, out of all the places we could be, we get to be here together.",
      "key": "Six columns once stood under G O L D E N, one letter per column. They were sorted alphabetically by their headings. Put the columns back under GOLDEN, then read across the rows from left to right. A dot (·) is a space; ignore × padding."
    }
  ],
  "finalClue": {
    "title": "One little surprise left.",
    "cipher": {
      "kind": "letter-grid",
      "text": "D O N E Y C H I C\nK O N P A I N T S\nU N L E T D R I N\nK S H F N E Y C H\nI C K E B P A I N\nT S U N S I T D R\nI N K S H O N E Y\nC H I C K E N D A\nI N T S U N S E L"
    },
    "key": "Find the nine-letter seam from the top-left corner to the bottom-right. Gather those letters, then rearrange them into one word."
  }
};
