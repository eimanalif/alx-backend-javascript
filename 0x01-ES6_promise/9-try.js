export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(String(error));
  } finally {
    queue.push('Guardail was processed');
  }

  return queue;
}
