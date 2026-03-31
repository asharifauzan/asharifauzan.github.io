import type { Payload } from "payload";

const data = [
  {
    projectName: "autofit-canvas (npm library)",
    description: "NPM package to fit image dimension into canvas defined dimension without chaning image aspect ratio",
    cover: "/assets/images/projects/autofit-canvas.png",
    url: "https://www.npmjs.com/package/autofit-canvas"
  },
  {
    projectName: "React WPM Counter",
    description: "React application to calculate user’s typing speed",
    cover: "/assets/images/projects/react-wpm-counter.png",
    url: "https://asharifauzan.github.io/react-wpm-counter"
  },
  {
    projectName: "React Math Quiz",
    description: "Simple React math quiz application to choose correct answers in 30 seconds",
    cover: "/assets/images/projects/react-math-quiz.png",
    url: "https://gitlab.com/asharifauzan/react-math-quiz"
  }
]

export const script = async(payload: Payload) => {
  console.log("🌱 start seeding projects");

  for(const row of data) {
    await payload.create({
      collection: "projects",
      data: row
    })
  }

  console.log("🌱 done seeding projects");
}