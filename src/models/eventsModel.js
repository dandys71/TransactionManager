const eventTemplates = new Map();

// TODO: Replace with Drizzle ORM insert
export function createEventTemplate(data) {
    eventTemplates.set(data.eventTemplateId, data);
    return data;
}

export function updateEventTemplate(data) {
    const existing = eventTemplates.get(data.eventTemplateId);

    if (!existing) {
      const err = new Error("Event template not found");
      err.status = 404;
      throw err;
    }

    const update = {
        ...existing,
        ...data
    };
    eventTemplates.set(update.eventTemplateId, update);
    return update;
}

export function deleteEventTemplate(eventTemplateId) {
    const existing = eventTemplates.get(eventTemplateId);

    if (!existing) {
        const err = new Error("Event template not found");
        err.status = 404;
        throw err;
    }

    eventTemplates.delete(eventTemplateId);
}

export function getEventTemplateById(eventTemplateId) {
    const existing = eventTemplates.get(eventTemplateId);

    if (!existing) {
        const err = new Error("Event template not found");
        err.status = 404;
        throw err;
    }

    return existing;
}

export function listEventTemplates (institutionId, query) {
    let list = Array.from(eventTemplates.values());

    if (institutionId) {
        list = list.filter(t => t.id === institutionId);
    }

    if (query){
        const q = query.toLowerCase();
        list = list.filter(t => t.name.toLowerCase().includes(q));
    }

    return list;
}
