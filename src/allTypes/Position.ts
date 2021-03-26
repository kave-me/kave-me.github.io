import { objectType } from '@nexus/schema';

export const Position = objectType({
  name: 'Position',
  definition(t) {
    t.id('id');
    t.string('title');
    t.string('startDate');
    t.string('endDate');
    t.string('employmentType');
    t.string('location');
    t.string('website');
    t.string('linkedin');
  }
});
