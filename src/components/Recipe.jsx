import Markdown from 'react-markdown'

export default function Recipe(props) {

    const markDown = props.recipe;

    return (
        <section className="suggested-recipe-container">
            <h2>Chef Mistral Recommends:</h2>
            <Markdown>
                {markDown}
            </Markdown>
        </section>
    )
}