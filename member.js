function skillsMember() {
  const member = document.querySelector('.member');
  const memberName = member.querySelector('.member__name').textContent;
  const memberSkills = member.querySelector('.member__skills').textContent;
  return { memberName, memberSkills };
}