export function Card({ name, title, bio }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p className="card-title">{title}</p>
      <p>{bio}</p>
    </div>
  )
}

export function App() {
  const profiles = [
    {
      id: 1,
      name: "Mark",
      title: "Frontend developer",
      bio: "I like to work with different frontend technologies and play video games."
    },
    {
      id: 2,
      name: "Tiffany",
      title: "Engineering manager",
      bio: "I have worked in tech for 15 years and love to help people grow in this industry.",
    },
    {
      id: 3,
      name: "Doug",
      title: "Backend developer",
      bio: "I have been a software developer for over 20 years and I love working with Go and Rust.",
    },

  ];
  return (
    <div className="flex-container">
      {profiles.map((profile) => (
        <Card
          key={profile.id}
          name={profile.name}
          title={profile.title}
          bio={profile.bio}
        />
      ))}
    </div>
  );
}

// Method 1 : you typically would not add multiple Card components manually like this.
export function NotUsedGenerally() {
  // How to create an array inside react to use in functions:
  const profiles = [
    {
      id: 1,
      name: "Mark",
      title: "Frontend developer",
      bio: "I like to work with different frontend technologies and play video games.",
    },
    {
      id: 2,
      name: "Tiffany",
      title: "Engineering manager",
      bio: "I have worked in tech for 15 years and love to help people grow in this industry.",
    },
    {
      id: 3,
      name: "Doug",
      title: "Backend developer",
      bio: "I have been a software developer for over 20 years and I love working with Go and Rust.",
    }
  ];
  return (
    <>
      <Card
        name="Mark"
        title="Frontend developer"
        bio="I like to work with different frontend technologies and play video games."
      />
      <Card
        name="Tiffany"
        title="Engineering manager"
        bio="I have worked in tech for 15 years and love to help people grow in this industry."
      />
      <Card
        name="Doug"
        title="Backend developer"
        bio="I have been a software developer for over 20 years and I love working with Go and Rust."
      />
    </>
  );
}
