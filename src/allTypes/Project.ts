import { objectType } from '@nexus/schema';

export const Project = objectType({
    name: 'Project',
    definition(t) {
        t.id('id');
        t.string('title');
        t.string('objective');
        t.string('github');
        t.string('website');
        t.string('linkedin');
    }
});
