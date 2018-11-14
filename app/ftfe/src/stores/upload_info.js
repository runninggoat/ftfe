import { combineReducers } from 'redux'
import { literatureInfo } from './literature_info'
import { picturesInfo } from './pictures_info'

export const uploadInfo = combineReducers({
  literatureInfo,
  picturesInfo,
})

export const documentIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAHovAAB6LwEf/fvJAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAVNQTFRF////7erawbykwbyk7era3dnD4t/N19O9wr2lwbyk3NjC5+TSwbyk7era6OXU6ebV1M+20s600s20wr2kwbykzsmuzsmvzsqvz8quz8qvz8qwz8uw0Muw0Mux0Myx0Myy0cux0cyy0c2z0s2z0s200s600s6108611M+21M+31NC31dC31dC41dG41tG51tK619K619K719O719O82NO72NO82NS92dS92dW92dW+2tW+2ta/29bA29fA29fB3NjC3NjD3NnC3dnD3dnE3drE3tnE3trE3trF3tvG39vG39vH4N3I4d3J4d7J4d7K4t7K4t7L49/L49/M4+DN5N/M5ODN5OHO5eLP5uHP5uLQ5uPQ5+PR5+TS6OTS6OTT6OXT6eXU6ebU6ebV6ufV6ufW6ujX6+fW6+fX6+jX7OjY7OnY7OnZ7Ona7OrZ7enZ7erZ7eraLDIuDwAAABR0Uk5TAAIHCAgX1tzf4ODk6Ojq6vHz9PUpzhIXAAAINklEQVR42u3d/W8TdRzA8atrR4FC28GUsRAedCASZBP1BxNiTDT+H/5N/jX+oiZG48MmPguCLsyBwa1b63DdgyD+aK+QOGx7d5/X+2eyb3vf1919r3e0pWQPjTUTDaXuxqBHeMpGjh0AAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAAKAuVBz5CpxJpe+7WSgD8u+o7kQAsfJvkS4BTwP/c2IMHABAAAAEAEAAAAQAQAAABABAAAAEAEAAAAQAQAAABABAAAAEAEAAAAQAQAAABABAAAAEAEAAAAQAQAAABABAAAAEAEAAAAQAQAAABABAAAAEAEAAAAQAQAAABABAAAAEAEAAAAQAQAAABABAAAAEAEAAAAQAQAAABABAAAAEAEAAAAQAQAAABABAAAAEAEABAeAEABBcAQHABAAQXAEBwAQAEFwBAcAEABBcAQHABAAQXAEBwAQAEFwBAcAEABBcAQHABAAQXAEBwAQAE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'