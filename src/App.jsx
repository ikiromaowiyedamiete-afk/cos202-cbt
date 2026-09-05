import { useEffect, useState } from "react"
import questions from "./data/questions"

function shuffleQuestions(questionList) {
  const shuffled = [...questionList]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function App() {
  const [started, setStarted] = useState(false)
  const [examQuestions, setExamQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [timeLeft, setTimeLeft] = useState(30 * 60)
  const [submitted, setSubmitted] = useState(false)
  const [results, setResults] = useState(null)

  // ---------------------------------------------------------
  // TIMER
  // ---------------------------------------------------------
  useEffect(() => {
    if (!started || submitted) return

    if (timeLeft <= 0) {
      submitExam()
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [started, submitted, timeLeft])

  // ---------------------------------------------------------
  // TIMER FORMAT
  // ---------------------------------------------------------
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`

  // ---------------------------------------------------------
  // START EXAM
  // ---------------------------------------------------------
  const startExam = () => {
    const shuffled = shuffleQuestions(questions)
    const selectedQuestions = shuffled.slice(
      0,
      Math.min(50, questions.length)
    )

    setExamQuestions(selectedQuestions)
    setAnswers({})
    setCurrentQuestion(0)
    setTimeLeft(30 * 60)
    setSubmitted(false)
    setResults(null)
    setStarted(true)
  }

  // ---------------------------------------------------------
  // EXIT EXAM
  // ---------------------------------------------------------
  const exitExam = () => {
    setStarted(false)
    setSubmitted(false)
    setResults(null)
    setExamQuestions([])
    setAnswers({})
    setCurrentQuestion(0)
    setTimeLeft(30 * 60)
  }

  // ---------------------------------------------------------
  // SELECT ANSWER
  // ---------------------------------------------------------
  const selectAnswer = (option) => {
    if (submitted) return
    setAnswers((prev) => ({
      ...prev,
      [examQuestions[currentQuestion].id]: option,
    }))
  }

  // ---------------------------------------------------------
  // SUBMIT EXAM
  // ---------------------------------------------------------
  const submitExam = () => {
    if (!examQuestions.length || submitted) return

    let correct = 0
    examQuestions.forEach((question) => {
      if (answers[question.id] === question.answer) {
        correct++
      }
    })

    const total = examQuestions.length
    const wrong = Object.keys(answers).filter((id) => {
      const question = examQuestions.find(
        (item) => item.id === Number(id)
      )
      return question && answers[id] !== question.answer
    }).length

    const unanswered = total - Object.keys(answers).length
    const percentage = Math.round((correct / total) * 100)
    const timeUsed = 30 * 60 - timeLeft

    setResults({
      correct,
      wrong,
      unanswered,
      total,
      percentage,
      timeUsed,
    })
    setSubmitted(true)
  }

  // ---------------------------------------------------------
  // RETAKE
  // ---------------------------------------------------------
  const retakeExam = () => {
    startExam()
  }

  // ---------------------------------------------------------
  // FORMAT TIME USED
  // ---------------------------------------------------------
  const formatTime = (secondsUsed) => {
    const mins = Math.floor(secondsUsed / 60)
    const secs = secondsUsed % 60
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`
  }

  // ---------------------------------------------------------
  // HOME SCREEN
  // ---------------------------------------------------------
  if (!started) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <header className="border-b border-white/10">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
            <div>
              <h1 className="text-xl font-bold">COS 202</h1>
              <span className="text-sm text-slate-400">CBT Prep</span>
            </div>
            <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              250 Questions
            </div>
          </div>
        </header>

        <main className="mx-auto flex min-h-[calc(100vh-85px)] max-w-6xl items-center px-5 py-16">
          <div className="w-full">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                Advanced Programming Concepts with Java
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Test your COS 202 knowledge.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Take a timed CBT examination using randomly selected
                questions from the complete 250-question COS 202 question
                bank.
              </p>

              <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-2xl font-bold">{questions.length}</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Question Bank
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-2xl font-bold">50</p>
                  <p className="mt-1 text-sm text-slate-400">Per Exam</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-2xl font-bold">30m</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Time Limit
                  </p>
                </div>
              </div>

              <button
                onClick={startExam}
                className="mt-10 rounded-2xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-500"
              >
                Start CBT
              </button>
            </div>
          </div>
        </main>
      </div>
    )
  }

  // ---------------------------------------------------------
  // RESULTS SCREEN
  // ---------------------------------------------------------
  if (submitted && results) {
    const passed = results.percentage >= 50

    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <header className="border-b border-white/10">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5">
            <div>
              <h1 className="text-xl font-bold">COS 202</h1>
              <p className="text-sm text-slate-400">Exam Results</p>
            </div>
            <div
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                passed
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "bg-red-500/10 text-red-400"
              }`}
            >
              {passed ? "PASSED" : "KEEP PRACTICING"}
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-5 py-12">
          <div className="text-center">
            <p className="text-sm font-medium text-blue-400">
              EXAM COMPLETED
            </p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              Your Result
            </h2>

            <div className="mx-auto mt-8 flex h-40 w-40 items-center justify-center rounded-full border-8 border-blue-500/20 bg-blue-500/10">
              <div>
                <p className="text-5xl font-bold">
                  {results.percentage}%
                </p>
              </div>
            </div>

            <p className="mt-5 text-slate-400">
              You scored{" "}
              <span className="font-semibold text-white">
                {results.correct}
              </span>{" "}
              out of{" "}
              <span className="font-semibold text-white">
                {results.total}
              </span>
              .
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-3xl font-bold text-emerald-400">
                {results.correct}
              </p>
              <p className="mt-2 text-sm text-slate-400">Correct</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-3xl font-bold text-red-400">
                {results.wrong}
              </p>
              <p className="mt-2 text-sm text-slate-400">Wrong</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-3xl font-bold text-yellow-400">
                {results.unanswered}
              </p>
              <p className="mt-2 text-sm text-slate-400">Unanswered</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-3xl font-bold">
                {formatTime(results.timeUsed)}
              </p>
              <p className="mt-2 text-sm text-slate-400">Time Used</p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-7">
            <h3 className="text-xl font-semibold">Performance Summary</h3>
            <div className="mt-6">
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-slate-400">Score</span>
                <span className="font-medium">
                  {results.correct}/{results.total}
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-blue-600 transition-all"
                  style={{
                    width: `${results.percentage}%`,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              onClick={retakeExam}
              className="rounded-2xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-500"
            >
              Retake Exam
            </button>
            <button
              onClick={exitExam}
              className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold transition hover:bg-white/10"
            >
              Back to Home
            </button>
          </div>
        </main>
      </div>
    )
  }

  // ---------------------------------------------------------
  // EXAM SCREEN
  // ---------------------------------------------------------
  const question = examQuestions[currentQuestion]
  const answeredCount = Object.keys(answers).length
  const isLastQuestion = currentQuestion === examQuestions.length - 1

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <div>
            <h1 className="font-bold">COS 202 CBT</h1>
            <p className="text-xs text-slate-500">
              Advanced Programming Concepts with Java
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden text-sm text-slate-400 sm:block">
              {answeredCount} / {examQuestions.length} Answered
            </div>
            <div
              className={`rounded-xl border px-4 py-2 font-mono font-bold ${
                timeLeft <= 60
                  ? "border-red-500/30 bg-red-500/10 text-red-400"
                  : "border-blue-500/20 bg-blue-500/10 text-blue-400"
              }`}
            >
              {formattedTime}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
          {/* QUESTION AREA */}
          <section>
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Question</p>
                <p className="text-xl font-bold">
                  {currentQuestion + 1}
                  <span className="text-slate-500">
                    {" "}
                    / {examQuestions.length}
                  </span>
                </p>
              </div>
              <div className="text-sm text-slate-400">
                {answeredCount} answered
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
              <h2 className="text-xl font-semibold leading-8 sm:text-2xl">
                {question.question}
              </h2>

              <div className="mt-8 space-y-3">
                {question.options.map((option, index) => {
                  const letter = String.fromCharCode(65 + index)
                  const selected = answers[question.id] === letter

                  return (
                    <button
                      key={letter}
                      onClick={() => selectAnswer(letter)}
                      className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                        selected
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-white/10 bg-slate-900/50 hover:border-white/20 hover:bg-white/5"
                      }`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold ${
                          selected
                            ? "bg-blue-600 text-white"
                            : "bg-slate-800 text-slate-400"
                        }`}
                      >
                        {letter}
                      </span>
                      <span className="text-sm leading-6 sm:text-base">
                        {option}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* NAVIGATION */}
            <div className="mt-5 flex items-center justify-between gap-3">
              <button
                onClick={() =>
                  setCurrentQuestion((prev) => Math.max(prev - 1, 0))
                }
                disabled={currentQuestion === 0}
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-30"
              >
                ← Previous
              </button>

              {isLastQuestion ? (
                <button
                  onClick={submitExam}
                  className="rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold transition hover:bg-emerald-500"
                >
                  Submit Exam
                </button>
              ) : (
                <button
                  onClick={() =>
                    setCurrentQuestion((prev) =>
                      Math.min(prev + 1, examQuestions.length - 1)
                    )
                  }
                  className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:bg-blue-500"
                >
                  Next →
                </button>
              )}
            </div>

            {/* EXIT */}
            <button
              onClick={exitExam}
              className="mt-6 w-full rounded-xl border border-red-500/20 bg-red-500/5 py-3 text-sm font-medium text-red-400 transition hover:bg-red-500/10"
            >
              Exit Exam
            </button>
          </section>

          {/* QUESTION NAVIGATOR */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-3xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">Questions</h3>
              <div className="mt-5 grid grid-cols-5 gap-2">
                {examQuestions.map((item, index) => {
                  const answered = answers[item.id] !== undefined
                  const current = index === currentQuestion

                  return (
                    <button
                      key={item.id}
                      onClick={() => setCurrentQuestion(index)}
                      className={`h-10 rounded-lg text-xs font-semibold transition ${
                        current
                          ? "bg-blue-600 text-white"
                          : answered
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                      }`}
                    >
                      {index + 1}
                    </button>
                  )
                })}
              </div>

              <div className="mt-6 space-y-3 border-t border-white/10 pt-5 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded bg-blue-600" />
                  Current
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded bg-emerald-500/40" />
                  Answered
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded bg-slate-700" />
                  Unanswered
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

export default App