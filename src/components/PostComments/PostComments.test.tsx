import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComments/>);
        expect(screen.getByTestId('post-comments-form')).toBeInTheDocument();
    });

    it('Deve inserir dois comentários', () => {
        render(<PostComments/>);
        
        const textarea = screen.getByTestId('post-comments-textarea');
        const button = screen.getByTestId('post-comments-button');

        // Inserir primeiro comentário
        fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(button);

        // Inserir segundo comentário
        fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
        fireEvent.click(button);

        // Verificar se os dois comentários foram inseridos
        const comments = screen.getAllByTestId('post-comment');
        expect(comments).toHaveLength(2);
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});