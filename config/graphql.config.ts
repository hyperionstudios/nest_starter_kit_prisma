import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { GraphQLModule } from "@nestjs/graphql";

export const graphqlConfig = GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    debug: true,
    playground: true,
});