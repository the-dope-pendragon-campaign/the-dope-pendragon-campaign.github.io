import { z, defineCollection } from "astro:content";

const sessionNotes = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string({required_error: "Every set of session notes must have a title."}),
        draft: z.boolean({required_error: "Every set of notes is either a draft or isn't."}),
    }),
})

export const collections = {
    "sessions": sessionNotes,
};