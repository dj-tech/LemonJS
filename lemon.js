function onEvent(boolean,preRun,postRunTrue,postRunFalse) {
  preRun()
  if (boolean) {
    postRunTrue()
  } else {
    postRunFalse()
  }
}
