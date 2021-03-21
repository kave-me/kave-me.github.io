import { intArg, queryType } from '@nexus/schema';
import { data } from '../data';
import { Bio, Position, Project } from './index';

export const Query = queryType({
    definition(t) {
        t.field('bio', {
            description: 'Get Biography information',
            type: Bio,
            resolve: () => data.bio
        });

        t.list.string('skills', {
            description: 'Get all the skills',
            resolve: () => data.skills
        });

        t.field('position', {
            description: "Find a position by it's id",
            type: Position,
            args: { id: intArg() },
            resolve: (root, { id }: { id: number }, ctx) =>
                data.positions.find((position) => position.id === id)
        });

        t.list.field('positions', {
            description: 'Get all the positions',
            type: Position,
            resolve: () => data.positions
        });

        t.field('project', {
            description: "Find a project by it's id",
            type: Project,
            args: { id: intArg() },
            resolve: (root, { id }: { id: number }, ctx) =>
                data.projects.find((project) => project.id === id)
        });

        t.list.field('projects', {
            description: 'Get all the projects',
            type: Project,
            resolve: () => data.projects
        });
    }
});
