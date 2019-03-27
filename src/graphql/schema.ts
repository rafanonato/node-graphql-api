import {makeExecutableSchema} from 'graphql-tools'

const User: any[] = [

    {
        id: 1,
        name: 'Rafa',
        email: 'rafa@rafa.com'
    },

    {
        id: 2,
        name: 'Rafa',
        email: 'rafa@rafa.com'
    }

]

const typeDefs = `

    type User{
        id: ID!
        name: String!
        email: String!
    }

    type Query{
        allUsers: [User!]
    }

    type Mutation {
        createUser(name: String!, email: String!): User
    }
`;

const resolvers = {
    Query:{
        allUsers: () => User
    },
    Mutation:{
        createUser: (parent, param) =>{
            const newUser = Object.assign({id: User.length + 1}, param);
            User.push(newUser);
            return newUser;

        }
    }
}

export default makeExecutableSchema({typeDefs, resolvers});