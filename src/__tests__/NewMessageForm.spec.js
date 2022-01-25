import React from 'react';
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NewMessageForm from '../components/NewMessageForm'

describe('<NewMessageForm />', () => {

    let getByTestId;


    describe('clicking the send button', () => {
        let sendHandler;
        
        beforeEach(async () => {
            sendHandler = jest.fn().mockName('sendHandler');
            // eslint-disable-next-line testing-library/no-render-in-setup
            ({ getByTestId } = render(<NewMessageForm onSend={sendHandler} />));

            await userEvent.type(
                getByTestId('messageText'),
                "New message",
            );
            userEvent.click(getByTestId('sendButton'));
        });
        it('clears the text field', () => {
            // eslint-disable-next-line testing-library/prefer-screen-queries
            expect(getByTestId('messageText').value).toEqual('')
        })
        it('calls the send handler', () => {
            expect(sendHandler).toHaveBeenCalledWith('New message');
        });
    })
})