interface MajorCredits {
  credits: number;
  brand: "Major"; //brand property to uniquely identify this interface
}
interface MinorCredits {
  credits: number;
  brand: "Minor"; //brand property to uniquely identify this interface
}

function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Major",
  };
}

function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Minor",
  };
}

const major1: MajorCredits = { credits: 3, brand: "Major" };
const major2: MajorCredits = { credits: 2, brand: "Major" };

const totalMajor = sumMajorCredits(major1, major2); // { credits: 5, brand: "Major" }
console.log(totalMajor);
const minor1: MinorCredits = { credits: 1, brand: "Minor" };
const minor2: MinorCredits = { credits: 2, brand: "Minor" };

const totalMinor = sumMinorCredits(minor1, minor2); // { credits: 3, brand: "Minor" }