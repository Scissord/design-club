import React from 'react'

type Props = {}

const css = {
  bottom_section: `
    h-[80vh] flex justify-between
    gap-6 px-6 py-2
  `,
  left_card: `
    w-1/2 rounded-lg bg-white dark:bg-dbg
    shadow-lg
  `,
  right_card: `
    w-1/2 rounded-lg bg-white dark:bg-dbg
    shadow-lg
  `,
};

const CardBottomSection = (props: Props) => {
  return (
    <section className={css.bottom_section}>
      <div className={css.left_card}>

      </div>
      <div className={css.right_card}>

      </div>
    </section>
  )
}

export default CardBottomSection