type PropTypes = {
    name: string;
    email: string;
    content:string
}

export const EmailTemplate = ({name, email, content}: PropTypes) => (
    <div>
        <h1>Message from: <em>{name}</em></h1>
        <h2>Response to: <em>{email}</em></h2>
        <p>
            {content}
        </p>
    </div>
)