# useFetch Hook

How to use it
<pre>
  <code>
    const Users = () => {
      const [err, users, loading, refetch] = useFetch(`/api/users`, {auto:true});

      const onClick = () => refetch(...);

      return (
        <div>
          {users.map((user) => <User key={user.id} user={user} />)}
        </div>
      );
    }
  </code>
</pre>
