import { useEffect, useMemo, useState, type ReactNode } from "react";

type IconName =
  | "home"
  | "items"
  | "calendar"
  | "insights"
  | "user"
  | "plus"
  | "search"
  | "bell"
  | "arrow"
  | "chevron"
  | "card"
  | "shield"
  | "file"
  | "repeat"
  | "receipt"
  | "spark"
  | "settings"
  | "lock"
  | "moon"
  | "filter"
  | "check"
  | "close"
  | "clock"
  | "more";

const paths: Record<IconName, ReactNode> = {
  home: (
    <>
      <path d="m3 10 9-7 9 7" />
      <path d="M5 9v11h14V9M9 20v-6h6v6" />
    </>
  ),
  items: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M8 9h8M8 13h8M8 17h5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </>
  ),
  insights: (
    <>
      <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  plus: (
    <>
      <path d="M12 5v14M5 12h14" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m16 16 5 5" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
    </>
  ),
  arrow: (
    <>
      <path d="m9 18 6-6-6-6" />
    </>
  ),
  chevron: (
    <>
      <path d="m8 10 4 4 4-4" />
    </>
  ),
  card: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="3" />
      <path d="M3 10h18M7 15h3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4.5 6v5c0 5 3 8.5 7.5 10 4.5-1.5 7.5-5 7.5-10V6z" />
      <path d="m9 12 2 2 4-5" />
    </>
  ),
  file: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v5h4M9 13h6M9 17h4" />
    </>
  ),
  repeat: (
    <>
      <path d="m17 2 4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 0 1-3 3H3" />
    </>
  ),
  receipt: (
    <>
      <path d="M6 3v18l3-2 3 2 3-2 3 2V3l-3 2-3-2-3 2z" />
      <path d="M9 10h6M9 14h6" />
    </>
  ),
  spark: (
    <>
      <path d="m12 2 1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6zM19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7z" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.8 1.8 0 0 0 .4 2l.1.1-2.8 2.8-.1-.1a1.8 1.8 0 0 0-2-.4 1.8 1.8 0 0 0-1 1.7v.2h-4v-.2a1.8 1.8 0 0 0-1-1.7 1.8 1.8 0 0 0-2 .4l-.1.1-2.8-2.8.1-.1a1.8 1.8 0 0 0 .4-2 1.8 1.8 0 0 0-1.7-1H2.7v-4h.2a1.8 1.8 0 0 0 1.7-1 1.8 1.8 0 0 0-.4-2l-.1-.1 2.8-2.8.1.1a1.8 1.8 0 0 0 2 .4 1.8 1.8 0 0 0 1-1.7v-.2h4v.2a1.8 1.8 0 0 0 1 1.7 1.8 1.8 0 0 0 2-.4l.1-.1 2.8 2.8-.1.1a1.8 1.8 0 0 0-.4 2 1.8 1.8 0 0 0 1.7 1h.2v4h-.2a1.8 1.8 0 0 0-1.7 1Z" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="3" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  moon: (
    <>
      <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z" />
    </>
  ),
  filter: (
    <>
      <path d="M4 6h16M7 12h10M10 18h4" />
    </>
  ),
  check: (
    <>
      <path d="m5 12 4 4L19 6" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12M18 6 6 18" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" />
    </>
  ),
  more: (
    <>
      <circle cx="5" cy="12" r="1" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
    </>
  ),
};

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}

const categories = [
  {
    id: "subscription",
    label: "Subscription",
    icon: "repeat" as IconName,
    tone: "blue",
    note: "Apps, memberships & services",
  },
  {
    id: "bill",
    label: "Bill",
    icon: "receipt" as IconName,
    tone: "orange",
    note: "Utilities, rent & payments",
  },
  {
    id: "emi",
    label: "EMI",
    icon: "card" as IconName,
    tone: "yellow",
    note: "Loans & instalments",
  },
  {
    id: "warranty",
    label: "Warranty",
    icon: "shield" as IconName,
    tone: "coral",
    note: "Products & coverage",
  },
  {
    id: "document",
    label: "Document",
    icon: "file" as IconName,
    tone: "ink",
    note: "IDs, policies & records",
  },
];

const items = [
  {
    name: "Spotify Family",
    cat: "Subscription",
    due: "Tomorrow",
    amount: "$17.99",
    icon: "repeat" as IconName,
    tone: "green",
  },
  {
    name: "Home insurance",
    cat: "Insurance",
    due: "Jun 28",
    amount: "$142.00",
    icon: "shield" as IconName,
    tone: "blue",
  },
  {
    name: "MacBook Pro",
    cat: "Warranty",
    due: "Expires Jul 03",
    amount: "",
    icon: "shield" as IconName,
    tone: "coral",
  },
  {
    name: "Electricity",
    cat: "Bill",
    due: "Jul 06",
    amount: "$86.40",
    icon: "receipt" as IconName,
    tone: "yellow",
  },
  {
    name: "Car loan",
    cat: "EMI",
    due: "Jul 09",
    amount: "$310.00",
    icon: "card" as IconName,
    tone: "ink",
  },
];

type Screen =
  | "home"
  | "items"
  | "calendar"
  | "insights"
  | "space"
  | "add"
  | "form"
  | "detail"
  | "history"
  | "search";

function Brand() {
  return (
    <div className="brand">
      <span className="brand-mark">
        <i />
        <i />
        <i />
      </span>
      <span>LIFEOS</span>
    </div>
  );
}

function MiniCalendar() {
  return (
    <div className="mini-calendar">
      <div className="weekdays">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>
      <div className="dates">
        {[16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29].map((d) => (
          <span className={d === 24 ? "selected" : d === 26 || d === 28 ? "has-event" : ""} key={d}>
            {d}
          </span>
        ))}
      </div>
    </div>
  );
}

function ConceptCard({
  kind,
  title,
  descriptor,
}: {
  kind: "editorial" | "modern" | "lifestyle";
  title: string;
  descriptor: string;
}) {
  return (
    <article className={`concept-card ${kind}`}>
      <div className="concept-themes">
        <span>Light</span>
        <span>Dark</span>
      </div>
      <div className="concept-phone light-mini">
        <div className="mini-head">
          <b>Good morning.</b>
          <i />
        </div>
        <div className="mini-kicker">Tuesday, June 24</div>
        <div className="mini-feature">
          <span>Up next</span>
          <strong>
            {kind === "editorial"
              ? "$17.99"
              : kind === "modern"
                ? "Spotify Family"
                : "One thing today"}
          </strong>
          <small>Due tomorrow</small>
        </div>
        <div className="mini-rows">
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="concept-phone dark-mini">
        <div className="mini-head">
          <b>{kind === "lifestyle" ? "June plans" : "Calendar"}</b>
          <i />
        </div>
        <MiniCalendar />
        <div className="mini-event">
          <i />
          <span>
            <b>Electricity</b>
            <small>Due Jun 26</small>
          </span>
        </div>
      </div>
      <div className="concept-copy">
        <span>0{kind === "editorial" ? "1" : kind === "modern" ? "2" : "3"}</span>
        <div>
          <h2>{title}</h2>
          <p>{descriptor}</p>
        </div>
      </div>
    </article>
  );
}

function ConceptLab({ onEnter }: { onEnter: () => void }) {
  return (
    <main className="lab">
      <header className="lab-header">
        <Brand />
        <button className="prototype-link" onClick={onEnter}>
          Open chosen direction <Icon name="arrow" size={17} />
        </button>
      </header>
      <section className="lab-intro">
        <div>
          <p className="eyebrow">Visual direction study · 2025</p>
          <h1>
            Life, handled
            <br />
            <em>beautifully.</em>
          </h1>
        </div>
        <p className="intro-copy">
          Three distinct visual systems for one calm, capable life platform. Each direction is shown
          across light and dark surfaces.
        </p>
      </section>
      <section className="concept-grid">
        <ConceptCard
          kind="editorial"
          title="The Journal"
          descriptor="Editorial & expressive · warm paper, vermilion, oversized type."
        />
        <ConceptCard
          kind="modern"
          title="Cadence"
          descriptor="Modern & confident · precise structure, cobalt, purposeful contrast."
        />
        <ConceptCard
          kind="lifestyle"
          title="Sunday"
          descriptor="Lifestyle & creative · optimistic color, soft forms, easy rhythm."
        />
      </section>
      <section className="selection">
        <div className="selection-number">02</div>
        <div>
          <p className="eyebrow">Selected direction</p>
          <h3>Cadence balances clarity with character.</h3>
          <p>
            Its crisp information architecture scales across generations, while the cobalt and
            signal-orange accents give LIFEOS a recognizable consumer identity.
          </p>
        </div>
        <button onClick={onEnter}>
          Explore prototype <Icon name="arrow" />
        </button>
      </section>
    </main>
  );
}

function TopBar({
  title,
  back,
  onBack,
  onSearch,
  actions = true,
}: {
  title?: string;
  back?: boolean;
  onBack?: () => void;
  onSearch?: () => void;
  actions?: boolean;
}) {
  return (
    <header className="topbar">
      {back ? (
        <button className="icon-button" onClick={onBack} aria-label="Go back">
          <Icon name="arrow" size={22} />
        </button>
      ) : title ? (
        <h1>{title}</h1>
      ) : (
        <Brand />
      )}
      {actions && (
        <div className="top-actions">
          {onSearch && (
            <button className="icon-button" onClick={onSearch} aria-label="Search">
              <Icon name="search" />
            </button>
          )}
          <button className="icon-button" aria-label="Notifications">
            <Icon name="bell" />
          </button>
        </div>
      )}
    </header>
  );
}

function ItemRow({ item, onClick }: { item: (typeof items)[number]; onClick?: () => void }) {
  return (
    <button className="item-row" onClick={onClick}>
      <span className={`item-icon ${item.tone}`}>
        <Icon name={item.icon} />
      </span>
      <span className="item-main">
        <strong>{item.name}</strong>
        <small>
          {item.cat} · {item.due}
        </small>
      </span>
      {item.amount && <b className="amount">{item.amount}</b>}
      <Icon name="arrow" size={17} />
    </button>
  );
}

function HomeScreen({ go }: { go: (s: Screen) => void }) {
  return (
    <div className="screen">
      <TopBar onSearch={() => go("search")} />
      <section className="home-hello">
        <div>
          <p>Tuesday, June 24</p>
          <h1>
            Good morning,
            <br />
            Maya.
          </h1>
        </div>
        <div className="avatar">MP</div>
      </section>
      <section className="up-next">
        <div className="next-top">
          <span>
            <i /> UP NEXT
          </span>
          <small>Due tomorrow</small>
        </div>
        <div className="next-main">
          <span className="service-logo">S</span>
          <div>
            <h2>Spotify Family</h2>
            <p>Monthly subscription</p>
          </div>
          <strong>$17.99</strong>
        </div>
        <div className="next-actions">
          <button onClick={() => go("detail")}>View details</button>
          <button className="paid">
            <Icon name="check" size={16} /> Mark paid
          </button>
        </div>
      </section>
      <section className="section-block">
        <div className="section-title">
          <div>
            <p>THIS WEEK</p>
            <h2>Three things need you</h2>
          </div>
          <button onClick={() => go("calendar")}>Calendar</button>
        </div>
        <div className="timeline">
          <div className="day">
            <span>
              <b>26</b>
              <small>THU</small>
            </span>
            <div>
              <strong>Electricity bill</strong>
              <small>Auto-pay · $86.40</small>
            </div>
            <i className="dot yellow" />
          </div>
          <div className="day">
            <span>
              <b>28</b>
              <small>SAT</small>
            </span>
            <div>
              <strong>Home insurance</strong>
              <small>Annual renewal · $142</small>
            </div>
            <i className="dot blue" />
          </div>
          <div className="day">
            <span>
              <b>30</b>
              <small>MON</small>
            </span>
            <div>
              <strong>Passport check</strong>
              <small>Review travel document</small>
            </div>
            <i className="dot coral" />
          </div>
        </div>
      </section>
      <section className="month-glance">
        <div>
          <p>JUNE AT A GLANCE</p>
          <h2>$556.39</h2>
          <span>Committed this month</span>
        </div>
        <div className="ring">
          <span>
            72<small>%</small>
          </span>
        </div>
      </section>
    </div>
  );
}

function ItemsScreen({ go, openFilter }: { go: (s: Screen) => void; openFilter: () => void }) {
  const [filter, setFilter] = useState("All");
  return (
    <div className="screen">
      <TopBar title="Items" actions={false} />
      <div className="search-trigger" onClick={() => go("search")}>
        <Icon name="search" size={19} />
        <span>Search subscriptions, bills, documents…</span>
      </div>
      <div className="filter-row">
        {["All", "Subscriptions", "Bills", "Warranties"].map((x) => (
          <button className={filter === x ? "active" : ""} onClick={() => setFilter(x)} key={x}>
            {x}
          </button>
        ))}
        <button onClick={openFilter}>
          <Icon name="filter" size={16} />
        </button>
      </div>
      <section className="items-summary">
        <div>
          <small>18 active items</small>
          <strong>
            $556.39 <i>/ mo</i>
          </strong>
        </div>
        <span>
          <Icon name="check" size={16} /> All in order
        </span>
      </section>
      <section className="group">
        <div className="group-title">
          <h3>Due soon</h3>
          <span>3</span>
        </div>
        {items.slice(0, 3).map((x, i) => (
          <ItemRow key={x.name} item={x} onClick={() => i === 0 && go("detail")} />
        ))}
      </section>
      <section className="group">
        <div className="group-title">
          <h3>Everything else</h3>
          <span>15</span>
        </div>
        {items.slice(3).map((x) => (
          <ItemRow key={x.name} item={x} />
        ))}
      </section>
    </div>
  );
}

function CalendarScreen({ go }: { go: (s: Screen) => void }) {
  return (
    <div className="screen calendar-screen">
      <TopBar title="Calendar" actions={false} />
      <div className="calendar-focus">
        <div className="month-head">
          <h2>
            June <span>2025</span>
          </h2>
          <div>
            <button>
              <Icon name="arrow" size={17} />
            </button>
            <button>
              <Icon name="arrow" size={17} />
            </button>
          </div>
        </div>
        <div className="date-ribbon">
          {[
            ["M", "23"],
            ["T", "24"],
            ["W", "25"],
            ["T", "26"],
            ["F", "27"],
            ["S", "28"],
            ["S", "29"],
          ].map(([day, date], i) => (
            <button
              className={i === 1 ? "active" : i === 3 || i === 5 ? "has-event" : ""}
              key={date}
            >
              <small>{day}</small>
              <strong>{date}</strong>
            </button>
          ))}
        </div>
        <div className="calendar-balance">
          <div>
            <p>REST OF JUNE</p>
            <strong>$246.39</strong>
          </div>
          <span>4 commitments</span>
        </div>
      </div>
      <section className="schedule">
        <div className="schedule-head">
          <div>
            <p>YOUR SCHEDULE</p>
            <h2>What’s ahead</h2>
          </div>
          <button>Today</button>
        </div>
        {[
          {
            date: "25",
            day: "WED",
            title: "Spotify Family",
            meta: "Subscription · $17.99",
            tone: "green",
          },
          {
            date: "26",
            day: "THU",
            title: "Electricity bill",
            meta: "Auto-pay · $86.40",
            tone: "yellow",
          },
          {
            date: "28",
            day: "SAT",
            title: "Home insurance",
            meta: "Annual renewal · $142",
            tone: "blue",
          },
        ].map((event, i) => (
          <button
            className="schedule-event"
            key={event.title}
            onClick={() => i === 0 && go("detail")}
          >
            <span className="schedule-date">
              <small>{event.day}</small>
              <strong>{event.date}</strong>
            </span>
            <i className={`event-line ${event.tone}`} />
            <span className="schedule-copy">
              <strong>{event.title}</strong>
              <small>{event.meta}</small>
            </span>
            <Icon name="arrow" size={17} />
          </button>
        ))}
        <div className="quiet-day">
          <Icon name="spark" size={18} />
          <span>
            <strong>Sunday is clear</strong>
            <small>Nothing needs your attention.</small>
          </span>
        </div>
      </section>
    </div>
  );
}

function InsightsScreen() {
  return (
    <div className="screen">
      <TopBar title="Insights" actions={false} />
      <div className="period-picker">
        <button>
          June 2025 <Icon name="chevron" size={16} />
        </button>
        <span>Updated today</span>
      </div>
      <section className="spend-hero">
        <div className="insight-total">
          <div>
            <p>MONTHLY COMMITMENTS</p>
            <h1>$556.39</h1>
          </div>
          <span>
            <b>7.1%</b>
            <small>less than May</small>
          </span>
        </div>
        <div className="commitment-chart">
          <div className="chart-guide">
            <span>$700</span>
            <span>$500</span>
            <span>$300</span>
          </div>
          <svg
            viewBox="0 0 320 112"
            preserveAspectRatio="none"
            aria-label="Six month commitment trend"
          >
            <defs>
              <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#d9f15d" stopOpacity=".72" />
                <stop offset="100%" stopColor="#d9f15d" stopOpacity=".04" />
              </linearGradient>
            </defs>
            <path
              className="chart-area"
              d="M0,75 C28,64 35,52 65,57 S108,89 135,66 S174,34 202,49 S245,78 268,54 S295,34 320,40 L320,112 L0,112Z"
            />
            <path
              className="chart-line"
              d="M0,75 C28,64 35,52 65,57 S108,89 135,66 S174,34 202,49 S245,78 268,54 S295,34 320,40"
            />
            <circle cx="320" cy="40" r="5" />
          </svg>
          <div className="chart-months">
            {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="insight-callout">
        <span>
          <Icon name="spark" />
        </span>
        <div>
          <p>WORTH NOTICING</p>
          <h3>You could save $119 this year</h3>
          <small>Two subscriptions haven’t been used recently.</small>
        </div>
        <Icon name="arrow" size={17} />
      </section>
      <section className="category-spend insight-breakdown">
        <div className="section-title">
          <div>
            <p>BREAKDOWN</p>
            <h2>Where it goes</h2>
          </div>
        </div>
        <div className="breakdown-layout">
          <div className="donut-chart">
            <span>
              <b>18</b>
              <small>items</small>
            </span>
          </div>
          <div className="breakdown-list">
            {[
              ["Housing & bills", "$296.40", "53%"],
              ["Loans & EMI", "$168.00", "30%"],
              ["Subscriptions", "$91.99", "17%"],
            ].map((x, i) => (
              <div className="spend-row" key={x[0]}>
                <i className={`dot ${["blue", "yellow", "coral"][i]}`} />
                <span>{x[0]}</span>
                <strong>{x[1]}</strong>
                <small>{x[2]}</small>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="forecast">
        <p>NEXT 30 DAYS</p>
        <div>
          <span>7 commitments</span>
          <strong>$624.80</strong>
        </div>
        <small>Includes your annual home insurance renewal.</small>
      </section>
    </div>
  );
}

function SpaceScreen({ dark, toggleDark }: { dark: boolean; toggleDark: () => void }) {
  return (
    <div className="screen space-screen">
      <TopBar title="My Space" actions={false} />
      <section className="space-hero">
        <div className="space-identity">
          <div className="profile-avatar">MP</div>
          <div>
            <span>LIFEOS PLUS</span>
            <h2>Maya Patel</h2>
            <p>Member since 2023</p>
          </div>
          <button>
            <Icon name="settings" size={20} />
          </button>
        </div>
        <div className="space-score">
          <div>
            <strong>92</strong>
            <span>/ 100</span>
          </div>
          <p>
            <b>Life is in good order</b>
            <small>16 of 18 items are up to date</small>
          </p>
          <div className="score-ring" />
        </div>
      </section>
      <section className="family-space">
        <div className="section-title">
          <div>
            <p>YOUR HOUSEHOLD</p>
            <h2>Family space</h2>
          </div>
          <button>Manage</button>
        </div>
        <div className="family-row">
          {["MP", "AP", "RP"].map((x, i) => (
            <span className={`family-avatar f${i}`} key={x}>
              {x}
            </span>
          ))}
          <button>
            <Icon name="plus" size={17} />
          </button>
          <p>
            <strong>3 people</strong>
            <small>Sharing 7 items</small>
          </p>
        </div>
      </section>
      <section className="space-grid">
        <button>
          <span>
            <Icon name="shield" />
          </span>
          <strong>Protection</strong>
          <small>Privacy & security</small>
          <Icon name="arrow" size={16} />
        </button>
        <button>
          <span>
            <Icon name="bell" />
          </span>
          <strong>Reminders</strong>
          <small>Smart alerts on</small>
          <Icon name="arrow" size={16} />
        </button>
      </section>
      <section className="appearance-panel">
        <div>
          <span className="setting-icon">
            <Icon name="moon" />
          </span>
          <p>
            <strong>Appearance</strong>
            <small>Choose your atmosphere</small>
          </p>
        </div>
        <div className="theme-choice">
          <button className={!dark ? "active" : ""} onClick={() => dark && toggleDark()}>
            <i className="theme-light" /> Light
          </button>
          <button className={dark ? "active" : ""} onClick={() => !dark && toggleDark()}>
            <i className="theme-dark" /> Dark
          </button>
        </div>
      </section>
      <section className="space-links">
        {[
          ["card", "Payment methods", "2 connected"],
          ["settings", "Categories & labels", "18 items"],
          ["lock", "Account & privacy", ""],
        ].map((x) => (
          <button key={x[1]}>
            <span>
              <Icon name={x[0] as IconName} />
            </span>
            <strong>{x[1]}</strong>
            <small>{x[2]}</small>
            <Icon name="arrow" size={16} />
          </button>
        ))}
      </section>
    </div>
  );
}

function AddScreen({ go, choose }: { go: (s: Screen) => void; choose: (s: string) => void }) {
  return (
    <div className="screen modal-screen">
      <TopBar title="Add to LifeOS" back onBack={() => go("home")} actions={false} />
      <section className="add-intro">
        <p>WHAT ARE WE ORGANISING?</p>
        <h1>Give it a home.</h1>
        <span>We’ll help with reminders, dates and the details that matter.</span>
      </section>
      <div className="category-list">
        {categories.map((c) => (
          <button key={c.id} onClick={() => choose(c.id)}>
            <span className={`category-icon ${c.tone}`}>
              <Icon name={c.icon} />
            </span>
            <div>
              <strong>{c.label}</strong>
              <small>{c.note}</small>
            </div>
            <Icon name="arrow" size={18} />
          </button>
        ))}
      </div>
      <div className="scan-card">
        <span>
          <Icon name="spark" />
        </span>
        <div>
          <strong>Scan a document</strong>
          <small>We’ll pull out the important details</small>
        </div>
        <button>Scan</button>
      </div>
    </div>
  );
}

function FormScreen({
  category,
  go,
  save,
}: {
  category: string;
  go: (s: Screen) => void;
  save: () => void;
}) {
  const data = categories.find((c) => c.id === category) || categories[0];
  const fields: Record<string, [string, string][]> = {
    subscription: [
      ["Name", "e.g. Netflix"],
      ["Price", "0.00"],
      ["Billing cycle", "Monthly"],
      ["Next payment", "Choose date"],
    ],
    bill: [
      ["Provider", "e.g. Electricity company"],
      ["Amount", "0.00"],
      ["Due date", "Choose date"],
      ["Frequency", "Monthly"],
    ],
    emi: [
      ["Loan / purchase", "e.g. Car loan"],
      ["Instalment amount", "0.00"],
      ["Payment date", "Choose date"],
      ["Payments remaining", "0"],
    ],
    warranty: [
      ["Product name", "e.g. MacBook Pro"],
      ["Purchased from", "Store or website"],
      ["Purchase date", "Choose date"],
      ["Warranty ends", "Choose date"],
    ],
    document: [
      ["Document name", "e.g. Passport"],
      ["Document type", "Choose type"],
      ["Expiry date", "Choose date"],
      ["Document number", "Optional"],
    ],
  };
  return (
    <div className="screen form-screen">
      <TopBar title={`New ${data.label}`} back onBack={() => go("add")} actions={false} />
      <div className={`form-hero ${data.tone}`}>
        <span>
          <Icon name={data.icon} size={26} />
        </span>
        <div>
          <p>{data.label.toUpperCase()}</p>
          <h2>Let’s add the essentials.</h2>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          save();
        }}
      >
        {fields[data.id].map(([label, placeholder], i) => (
          <label key={label}>
            <span>
              {label}
              {i < 3 && <b>*</b>}
            </span>
            <div>
              <input placeholder={placeholder} />
              {i > 1 && <Icon name={i === 2 ? "calendar" : "chevron"} size={18} />}
            </div>
          </label>
        ))}
        <label>
          <span>Notes</span>
          <textarea placeholder="Anything useful to remember…" />
        </label>
        <button className="upload" type="button">
          <Icon name="plus" />
          <span>
            <strong>Add attachment</strong>
            <small>Receipt, invoice or document</small>
          </span>
        </button>
        <label className="reminder-toggle">
          <div>
            <strong>Smart reminders</strong>
            <small>We’ll remind you before it’s due</small>
          </div>
          <span className="switch on">
            <i />
          </span>
        </label>
        <button className="primary-button" type="submit">
          Save {data.label}
        </button>
      </form>
    </div>
  );
}

function DetailScreen({ go }: { go: (s: Screen) => void }) {
  return (
    <div className="screen detail-screen">
      <TopBar back onBack={() => go("items")} actions={false} />
      <section className="detail-identity">
        <span className="service-logo large">S</span>
        <div>
          <p>SUBSCRIPTION</p>
          <h1>Spotify Family</h1>
          <span>Active · Monthly</span>
        </div>
        <button>
          <Icon name="more" />
        </button>
      </section>
      <section className="detail-price">
        <div>
          <p>NEXT PAYMENT</p>
          <h2>$17.99</h2>
          <span>Tomorrow · Jun 25, 2025</span>
        </div>
        <button>
          <Icon name="check" size={17} /> Mark paid
        </button>
      </section>
      <section className="detail-card">
        <p>DETAILS</p>
        {[
          ["Billing cycle", "Monthly"],
          ["Payment method", "•••• 4242"],
          ["Started", "Aug 25, 2022"],
          ["Category", "Entertainment"],
        ].map((x) => (
          <div key={x[0]}>
            <span>{x[0]}</span>
            <strong>{x[1]}</strong>
          </div>
        ))}
      </section>
      <button className="history-link" onClick={() => go("history")}>
        <span>
          <Icon name="clock" />
        </span>
        <div>
          <strong>Payment history</strong>
          <small>12 payments · $215.88 total</small>
        </div>
        <Icon name="arrow" size={18} />
      </button>
      <section className="reminder-card">
        <span>
          <Icon name="bell" />
        </span>
        <div>
          <strong>Reminder set</strong>
          <small>2 days before each payment</small>
        </div>
        <button>Edit</button>
      </section>
      <button className="secondary-button">Edit subscription</button>
    </div>
  );
}

function HistoryScreen({ go }: { go: (s: Screen) => void }) {
  return (
    <div className="screen">
      <TopBar title="Payment history" back onBack={() => go("detail")} actions={false} />
      <section className="history-total">
        <p>PAID IN THE LAST 12 MONTHS</p>
        <h1>$215.88</h1>
        <span>12 payments · All on time</span>
      </section>
      <section className="group payments">
        <div className="group-title">
          <h3>2025</h3>
          <span>$107.94</span>
        </div>
        {["May 25", "Apr 25", "Mar 25", "Feb 25", "Jan 25"].map((x) => (
          <div className="payment-row" key={x}>
            <span className="paid-check">
              <Icon name="check" size={15} />
            </span>
            <div>
              <strong>Spotify Family</strong>
              <small>{x}, 2025 · Paid</small>
            </div>
            <b>$17.99</b>
          </div>
        ))}
      </section>
      <section className="group payments">
        <div className="group-title">
          <h3>2024</h3>
          <span>$107.94</span>
        </div>
        {["Dec 25", "Nov 25", "Oct 25"].map((x) => (
          <div className="payment-row" key={x}>
            <span className="paid-check">
              <Icon name="check" size={15} />
            </span>
            <div>
              <strong>Spotify Family</strong>
              <small>{x}, 2024 · Paid</small>
            </div>
            <b>$17.99</b>
          </div>
        ))}
      </section>
    </div>
  );
}

function SearchScreen({ go }: { go: (s: Screen) => void }) {
  const [query, setQuery] = useState("");
  const results = items.filter((x) => (x.name + x.cat).toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="screen search-screen">
      <div className="search-head">
        <button onClick={() => go("items")}>
          <Icon name="arrow" />
        </button>
        <div>
          <Icon name="search" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search your life"
          />
          {query && (
            <button onClick={() => setQuery("")}>
              <Icon name="close" size={17} />
            </button>
          )}
        </div>
      </div>
      {!query ? (
        <>
          <section className="recent">
            <p>RECENT</p>
            {["Spotify Family", "Passport", "Home insurance"].map((x, i) => (
              <button key={x} onClick={() => setQuery(x)}>
                <Icon name="clock" size={18} />
                <span>{x}</span>
                <Icon name="arrow" size={16} />
              </button>
            ))}
          </section>
          <section className="search-categories">
            <p>BROWSE BY TYPE</p>
            <div>
              {categories.map((c) => (
                <button key={c.id} onClick={() => setQuery(c.label)}>
                  <span className={c.tone}>
                    <Icon name={c.icon} />
                  </span>
                  {c.label}
                </button>
              ))}
            </div>
          </section>
        </>
      ) : results.length ? (
        <section className="results">
          <p>
            {results.length} RESULT{results.length > 1 ? "S" : ""}
          </p>
          {results.map((x, i) => (
            <ItemRow item={x} key={x.name} onClick={() => i === 0 && go("detail")} />
          ))}
        </section>
      ) : (
        <EmptyState onReset={() => setQuery("")} />
      )}
    </div>
  );
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <section className="empty-state">
      <div className="empty-illustration">
        <Icon name="search" size={30} />
        <i />
        <i />
      </div>
      <h2>Nothing hiding here</h2>
      <p>Try a different name, category or date.</p>
      <button onClick={onReset}>Clear search</button>
    </section>
  );
}

function LoadingOverlay() {
  return (
    <div className="loading-state">
      <div className="loading-brand">
        <span />
        <span />
        <span />
      </div>
      <p>Putting things in order…</p>
    </div>
  );
}

const nav: { id: Screen; label: string; icon: IconName }[] = [
  { id: "home", label: "Home", icon: "home" },
  { id: "items", label: "Items", icon: "items" },
  { id: "calendar", label: "Calendar", icon: "calendar" },
  { id: "insights", label: "Insights", icon: "insights" },
  { id: "space", label: "My Space", icon: "user" },
];

function BottomNav({ current, go }: { current: Screen; go: (s: Screen) => void }) {
  return (
    <nav className="bottom-nav">
      <div className="nav-halo" />
      {nav.map((n, i) => (
        <div key={n.id} className="nav-slot">
          {i === 2 && (
            <button className="add-fab" onClick={() => go("add")} aria-label="Add item">
              <Icon name="plus" size={25} />
            </button>
          )}
          <button onClick={() => go(n.id)} className={current === n.id ? "active" : ""}>
            <Icon name={n.icon} />
            <span>{n.label}</span>
          </button>
        </div>
      ))}
    </nav>
  );
}

function Prototype({ onLab }: { onLab: () => void }) {
  const [screen, setScreen] = useState<Screen>("home");
  const [dark, setDark] = useState(false);
  const [category, setCategory] = useState("subscription");
  const [sheet, setSheet] = useState(false);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 950);
    return () => clearTimeout(t);
  }, []);
  const go = (s: Screen) => {
    setScreen(s);
    document.querySelector(".phone-content")?.scrollTo({ top: 0, behavior: "smooth" });
  };
  const isMain = nav.some((n) => n.id === screen);
  const content = useMemo(() => {
    if (screen === "home") return <HomeScreen go={go} />;
    if (screen === "items") return <ItemsScreen go={go} openFilter={() => setSheet(true)} />;
    if (screen === "calendar") return <CalendarScreen go={go} />;
    if (screen === "insights") return <InsightsScreen />;
    if (screen === "space")
      return <SpaceScreen dark={dark} toggleDark={() => setDark((x) => !x)} />;
    if (screen === "add")
      return (
        <AddScreen
          go={go}
          choose={(c) => {
            setCategory(c);
            go("form");
          }}
        />
      );
    if (screen === "form")
      return (
        <FormScreen
          category={category}
          go={go}
          save={() => {
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
              go("items");
            }, 1300);
          }}
        />
      );
    if (screen === "detail") return <DetailScreen go={go} />;
    if (screen === "history") return <HistoryScreen go={go} />;
    return <SearchScreen go={go} />;
  }, [screen, dark, category]);
  return (
    <main className={`prototype-page ${dark ? "dark" : "light"}`}>
      <aside className="prototype-aside">
        <button className="back-lab" onClick={onLab}>
          <Icon name="arrow" size={18} /> Concept study
        </button>
        <div>
          <p className="eyebrow">Chosen direction · Cadence</p>
          <h1>
            Your whole life.
            <br />
            <em>One calm place.</em>
          </h1>
          <p>A high-fidelity interactive prototype for the things you pay, protect and remember.</p>
        </div>
        <div className="aside-notes">
          <span>18</span>
          <p>
            CONNECTED SCREENS
            <br />
            <small>Tap around the device</small>
          </p>
        </div>
      </aside>
      <div className="device-wrap">
        <div className="device">
          <div className="status-bar">
            <span>9:41</span>
            <i />
            <div>
              <b />
              <b />
              <b />
            </div>
          </div>
          <div className="phone-content">{content}</div>
          {isMain && <BottomNav current={screen} go={go} />}
          {sheet && (
            <div className="sheet-layer" onClick={() => setSheet(false)}>
              <div className="bottom-sheet" onClick={(e) => e.stopPropagation()}>
                <i />
                <div className="sheet-title">
                  <h2>Filter items</h2>
                  <button onClick={() => setSheet(false)}>
                    <Icon name="close" />
                  </button>
                </div>
                <p>STATUS</p>
                {["Active", "Due soon", "Expired", "Archived"].map((x, i) => (
                  <button className="check-row" key={x}>
                    <span className={i === 0 ? "checked" : ""}>
                      {i === 0 && <Icon name="check" size={14} />}
                    </span>
                    {x}
                  </button>
                ))}
                <button className="primary-button" onClick={() => setSheet(false)}>
                  Show 18 items
                </button>
              </div>
            </div>
          )}
          {success && (
            <div className="success-overlay">
              <span>
                <Icon name="check" size={34} />
              </span>
              <h2>Added to your LifeOS</h2>
              <p>We’ll keep an eye on it.</p>
            </div>
          )}
          {loading && <LoadingOverlay />}
        </div>
        <div className="device-controls">
          <button onClick={() => setDark((x) => !x)}>
            <Icon name="moon" size={18} />
            {dark ? "Light" : "Dark"} theme
          </button>
          <span>Interactive prototype</span>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  const [mode, setMode] = useState<"lab" | "prototype">("lab");
  return mode === "lab" ? (
    <ConceptLab onEnter={() => setMode("prototype")} />
  ) : (
    <Prototype onLab={() => setMode("lab")} />
  );
}
