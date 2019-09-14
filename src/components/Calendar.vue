<template>
            <section class="calendar">
          <h2 class="titulo-ano">2019</h2>
          <h2 class="titulo-mes">Mai</h2>
          <table>
            <thead>
            <tr>
              <th>Lun</th>
              <th>Mar</th>
              <th>Mer</th>
              <th>Jeu</th>
              <th>Ven</th>
              <th>Sem</th>
              <th>Dim</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td class="junho">25</td>
              <td class="junho">26</td>
              <td class="junho">27</td>
              <td class="junho">28</td>
              <td class="junho">29</td>
              <td class="junho">30</td>
              <td>1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
            </tr>
            <tr>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
            </tr>
            <tr>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
              <td>22</td>
            </tr>
            <tr>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td class="dia-atual">27</td>
              <td>28</td>
              <td>29</td>
            </tr>
            <tr>
              <td>30</td>
              <td>31</td>
              <td class="agosto">1</td>
              <td class="agosto">2</td>
              <td class="agosto">3</td>
              <td class="agosto">4</td>
              <td class="agosto">5</td>
            </tr>

            </tbody>
          </table>

          </section>
</template>

<script>
export default {
  name: 'Calendar'

}
</script>

<style scoped>

table {
	margin-top: 1.875em;
	font-size: 0.9em;
}

thead {
	border: none;
}

th, td {
	color: #3d3f3f;
	text-align: center;
}

.calendar {

	padding: .8em;
	margin: .6em auto;
	width: 25em;
}

.junho, .agosto {
	color: #d6d7d6;
}

.titulo-mes, .titulo-ano {
	font-size: 1.8em;
	margin: 0.5em;
}

.titulo-mes {
	color: #6199C6;
}

.titulo-ano {
	color: #535858;
	float: right;
}

p {
	color: #3d3f3f;
	font-weight: bold;
	text-align: center;
}

#made-by a {
	color: #0a0707;
	text-decoration: none;
}

.fa {
	color: #e90606;
	margin: 0 3px;
	font-size: 10px;
	animation: pound .35s infinite alternate;
	-webkit-animation: pound .35s infinite alternate;
}

</style>
