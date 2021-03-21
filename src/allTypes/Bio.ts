import { objectType } from '@nexus/schema';

export const Bio = objectType({
    name: 'Bio',
    definition(t) {
        t.string('name');
        t.string('tagline');
        t.string('email');
        t.string('github');
        t.string('website');
        t.string('linkedin');
        t.string('objective');
    }
});
