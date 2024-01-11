interface MajorCredits {
  credits: number & { __kind: 'major' };
}

interface MinorCredits {
  credits: number & { __kind: 'minor' };
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}
