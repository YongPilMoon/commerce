import { SetStateAction, useRef, Dispatch } from 'react'
import {
  NumberInput,
  Group,
  ActionIcon,
  NumberInputHandlers,
} from '@mantine/core'

interface CountControlProps {
  value: number | undefined
  setValue: Dispatch<SetStateAction<number | undefined>>
}

function CountControl({ value, setValue }: CountControlProps) {
  const handlers = useRef<NumberInputHandlers>()

  return (
    <Group spacing={5}>
      <ActionIcon
        size={42}
        variant="default"
        onClick={() => handlers.current?.decrement()}
      >
        –
      </ActionIcon>

      <NumberInput
        hideControls
        value={value}
        onChange={(val) => setValue(val)}
        handlersRef={handlers}
        max={10}
        min={0}
        step={1}
        styles={{ input: { width: 54, textAlign: 'center' } }}
        readOnly
      />

      <ActionIcon
        size={42}
        variant="default"
        onClick={() => handlers.current?.increment()}
      >
        +
      </ActionIcon>
    </Group>
  )
}

export default CountControl
