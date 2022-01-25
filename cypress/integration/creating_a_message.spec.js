describe('Creating a message', () => {
    it('Displays the message in the list', () => { 
        // Visit the website
        cy.visit('http://localhost:3000');

        // Entering the text "New message" into a message text field
        cy.get('[data-testid="messageText"]')
            .type('New Message');
        
        // Check if send message button in present
        cy.get('[data-testid="sendButton"]')
            // Click the button
            .click();
        // Ensure the message text is cleared
        cy.get('[data-testid="messageText"]')
            .should('have.value', '');
        
        // Ensure New Message is present on the screen
        cy.contains('New Message');
    })
})