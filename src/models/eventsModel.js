const eventTemplates = new Map();

// TODO: Replace with Drizzle ORM insert
export function createEventTemplate(data) {
    eventTemplates.set(data.eventTemplateId, data);
    return data;
}
