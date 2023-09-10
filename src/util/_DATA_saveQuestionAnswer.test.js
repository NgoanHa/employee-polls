import { _saveQuestionAnswer} from "./_DATA";

describe("_saveQuestionAnswer", () => {
    it("correct parameters is passed", async () => {
        const actual = await _saveQuestionAnswer({
            authedUser: "sarahedo",
            qid: "6ni6ok3ym7mf1p33lnez",
            answer: "optionOne"
        });

        expect(actual).toBeTruthy();
    });
    it("incorrect parameters is passed", async () => {
        const actual = await _saveQuestionAnswer({
            authedUser: "sarahedo",
            qid: undefined,
            answer: "optionOne"
        }).catch(ex => ex);
        expect(actual).toBe("Invalid input data format!");
    });
});
