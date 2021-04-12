describe('test calculator', () => {
    it("실행", () => {
        expect(true).to.equal(true);
    })

    it("숫자 버튼 클릭시, 입력확인", () => {
        cy.get(".digit").click();
    })

});