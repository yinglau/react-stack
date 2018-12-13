export const HOME_CHANGE_TITLE = 'HomePage/HOME_CHANGE_TITLE';

export function changeTitle(title) {
  return {
    type: HOME_CHANGE_TITLE,
    title,
  };
}
