import isValidEmail from "../src/emailChecker";

test("email contains @ character", () => {
  const email = "will@test.com";
  expect(isValidEmail(email)).toBe(false);
});

/**
 * a. Il doit contenir au moins un @
b. Il doit contenir au moins un point dans le nom de domaine (et pas le dernier caractère
c. Il ne peut contenir aucun espace
d. Il doit avoir du texte avant et après le @
 */
