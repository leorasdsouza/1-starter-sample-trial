/*export const generateSprintSummary = (tasks: any[]) => {
    const summary = {
        whatWentWell: [],
        whatWentWrong: [],
        retrospectiveInsights: [],
    };

    tasks.forEach((task) => {
        if (task.status === 'completed') {
            summary.whatWentWell.push(task.title);  // Collect completed tasks
        } else if (task.status === 'blocked') {
            summary.whatWentWrong.push(task.title);  // Collect blocked tasks
            summary.retrospectiveInsights.push('Investigate blockers');
        } else if (task.status === 'in-progress') {
            summary.retrospectiveInsights.push('Complete in-progress tasks');
        }
    });

    return summary;
};
*/