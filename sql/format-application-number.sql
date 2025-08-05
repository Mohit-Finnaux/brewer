create or replace function format_application_number()
  returns trigger as $$
begin
  update "loanApplications"
  set "applicationNumber" = "applicationNumber" || to_char(nextval('application_number_sequence'), 'FM0000000000')
  where id = new.id;

  return null;
end;
$$ language plpgsql;

do $$
begin
  if not exists (
    select 1
    from pg_trigger
    where tgname = 'format_application_number_trigger'
  ) then
    create trigger format_application_number_trigger
    after insert on "loanApplications"
    for each row
    execute function format_application_number();
  end if;
end $$;