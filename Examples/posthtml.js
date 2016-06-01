"use strict"

const PostHTML = require("posthtml")

const data =
{
    name: "Aleksey",
    company: "Hell Yeah LLC",
    age: 19,
    email: "shvaikalesh@gmail.com",
    projects: [ "Chaplin", "Brunch", "Exim" ]
}

const html =
`
    <p> Hello, I am {name} of {company}</p>
    <p> I am {age} yo</p>
    <address>
        Contact me: {email}
    </address>

    <ul>
        <each key=projects>
            <li>$value</li>
        </each>
    </ul>
`

const pattern = /\{\s*(\w+)\s*\}/g

const plugin = tree => tree
    .match({ content: true }, node =>
    {
        node.content =
        node.content.map(child => typeof child == "string"
            ? child.replace(pattern, (_, key) => data[key])
            : child
        )

        return node
    })
    .match({ content: [{ tag: "each" }] }, node =>
    {
        node.content =
        node.content.reduce((content, node) =>
        {
            if (node.tag == "each")
            {
                let {key} = node.attrs

                content.push(...data[key].map(value =>
                {
                    // deep map here
                }))
            }
            else content.push(node)

            return content
        },  [])

        return node
    })

PostHTML([ plugin ])
    .process(html)
    .then(result =>
    {
        console.log(result.html)
    })
    .catch(console.error)