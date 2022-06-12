import { createSnackbarQueue } from "@rmwc/snackbar";

const queue = createSnackbarQueue();

export const { messages, notify } = queue;