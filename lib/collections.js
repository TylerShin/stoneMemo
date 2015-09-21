Results = new Mongo.Collection("results");

Schemas.Result = new SimpleSchema({
    matchResult: {
        type: Boolean,
        label: "대전결과"
    },
    myChar: {
        type: String,
        label: "내 직업",
        allowedValues: ["마법사", "사냥꾼", "성기사", "전사", "드루이드", "흑마법사", "주술사", "사제", "도적"]
    },
    myDeck: {
        type: String,
        label: "내 덱",
        max: 7
    },
    otherChar: {
        type: String,
        label: "상대 직업",
        allowedValues: ["마법사", "사냥꾼", "성기사", "전사", "드루이드", "흑마법사", "주술사", "사제", "도적"]
    },
    otherDeck: {
        type: String,
        label: "상대 덱",
        optional: true,
        max: 7
    },
    memo: {
        type: String,
        label: "메모",
        optional: true,
        max: 100
    },
    createdAt: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
                return new Date;
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date};
            } else {
                this.unset();  // Prevent user from supplying their own value
            }
        }
    },
    user_id: {
        type: String,
        autoValue: function() {
            return this.userId;
        }
    }
});

Results.attachSchema(Schemas.Result);