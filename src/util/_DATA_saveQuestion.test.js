import { _saveQuestion } from "./_DATA";

describe("_saveQuestion", () => {
    it("correct parameters is passed", async () => {
        const author = "johndoe";
        const optionOneText = "optionOne";
        const optionTwoText = "optionTwo";

        const actual = await _saveQuestion({
            optionOneText,
            optionTwoText,
            author
        });

        const actualQuestion = {
            "author": actual.author,
            "optionOne": {
                "votes": [],
                "text": actual.optionOne.text
            },
            "optionTwo": {
                "votes": [],
                "text": actual.optionTwo.text
            }
        }

        const expectedQuestion = {
            "author": author,
            "optionOne": {
                "votes": [],
                "text": optionOneText
            },
            "optionTwo": {
                "votes": [],
                "text": optionTwoText
            }
        }
        expect(actualQuestion).toMatchObject(expectedQuestion);
    });
    it("incorrect parameters is passed", async () => {
        const actual = await _saveQuestion({
            author: "sarahedo",
            optionOneText: undefined,
            optionTwoText: "optionTwo"
        }).catch(ex => ex);
        expect(actual).toBe("Invalid input data format!");
    });
});