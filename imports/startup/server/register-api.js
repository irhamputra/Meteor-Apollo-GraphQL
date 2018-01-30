import {createApolloServer} from "meteor/apollo";
import {makeExecutableSchema} from "graphql-tools";
import ResolutionsSchema from "../../api/resolutions/Resolutions.graphql";

const testSchema = `
    type Query {
        hi: String 
        resolutions: [Resolutions]
    }
`;

const typeDefs = [testSchema, ResolutionsSchema];

const resolvers = {
    Query: {
        hi(){
            return "Hello User!"
        },
        resolutions(){
            return [
                {
                    _id: 7,
                    name: "Learning Apollo GraphQL"
                },
                {
                    _id: 9,
                    name: "Connecting main feature from Frontend to Backend with Apollo GraphQL"
                }
            ]
        }
    }
};

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

createApolloServer({schema});